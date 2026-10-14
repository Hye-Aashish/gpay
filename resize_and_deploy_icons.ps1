Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$SourcePath,
        [string]$DestPath,
        [int]$TargetWidth,
        [int]$TargetHeight,
        [bool]$FillWhite = $false
    )

    $srcImg = [System.Drawing.Image]::FromFile($SourcePath)
    $destBitmap = New-Object System.Drawing.Bitmap($TargetWidth, $TargetHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    if ($FillWhite) {
        $graphics.Clear([System.Drawing.Color]::White)
        
        # Fit image maintaining aspect ratio in center
        $srcRatio = $srcImg.Width / $srcImg.Height
        $destRatio = $TargetWidth / $TargetHeight
        
        # We want the splash logo to occupy a nice proportion (e.g., max 50% width or height)
        $maxW = $TargetWidth * 0.65
        $maxH = $TargetHeight * 0.65
        
        $scale = [Math]::Min($maxW / $srcImg.Width, $maxH / $srcImg.Height)
        $w = [int]($srcImg.Width * $scale)
        $h = [int]($srcImg.Height * $scale)
        $x = [int](($TargetWidth - $w) / 2)
        $y = [int](($TargetHeight - $h) / 2)
        
        $graphics.DrawImage($srcImg, $x, $y, $w, $h)
    } else {
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.DrawImage($srcImg, 0, 0, $TargetWidth, $TargetHeight)
    }

    $destDir = [System.IO.Path]::GetDirectoryName($DestPath)
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    # Save to temp then copy to avoid file locks
    $tempSave = [System.IO.Path]::GetTempFileName() + ".png"
    $destBitmap.Save($tempSave, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graphics.Dispose()
    $destBitmap.Dispose()
    $srcImg.Dispose()

    Move-Item -Path $tempSave -Destination $DestPath -Force
    Write-Host "Generated: $DestPath ($TargetWidth x $TargetHeight)"
}

$baseDir = $PSScriptRoot
$resDir = Join-Path $baseDir "android\app\src\main\res"

$fgMaster = Join-Path $baseDir "temp_icons\fg_master.png"
$sqMaster = Join-Path $baseDir "temp_icons\sq_master.png"
$rdMaster = Join-Path $baseDir "temp_icons\rd_master.png"
$spMaster = Join-Path $baseDir "temp_icons\sp_master.png"

# Mipmap definitions: folder, launcher_w, foreground_w
$mipmaps = @(
    @{ Folder = "mipmap-mdpi";    Launcher = 48;  Fg = 108 },
    @{ Folder = "mipmap-hdpi";    Launcher = 72;  Fg = 162 },
    @{ Folder = "mipmap-xhdpi";   Launcher = 96;  Fg = 216 },
    @{ Folder = "mipmap-xxhdpi";  Launcher = 144; Fg = 324 },
    @{ Folder = "mipmap-xxxhdpi"; Launcher = 192; Fg = 432 }
)

foreach ($m in $mipmaps) {
    $dir = Join-Path $resDir $m.Folder
    
    # 1. Square Launcher icon
    $sqPath = Join-Path $dir "ic_launcher.png"
    Resize-Image -SourcePath $sqMaster -DestPath $sqPath -TargetWidth $m.Launcher -TargetHeight $m.Launcher
    
    # 2. Round Launcher icon
    $rdPath = Join-Path $dir "ic_launcher_round.png"
    Resize-Image -SourcePath $rdMaster -DestPath $rdPath -TargetWidth $m.Launcher -TargetHeight $m.Launcher
    
    # 3. Foreground icon
    $fgPath = Join-Path $dir "ic_launcher_foreground.png"
    Resize-Image -SourcePath $fgMaster -DestPath $fgPath -TargetWidth $m.Fg -TargetHeight $m.Fg
}

# Splash screen definitions
$splashes = @(
    @{ Folder = "drawable";              Width = 480;  Height = 320 },
    @{ Folder = "drawable-land-mdpi";    Width = 480;  Height = 320 },
    @{ Folder = "drawable-land-hdpi";    Width = 800;  Height = 480 },
    @{ Folder = "drawable-land-xhdpi";   Width = 1280; Height = 720 },
    @{ Folder = "drawable-land-xxhdpi";  Width = 1600; Height = 960 },
    @{ Folder = "drawable-land-xxxhdpi"; Width = 1920; Height = 1280 },
    @{ Folder = "drawable-port-mdpi";    Width = 320;  Height = 480 },
    @{ Folder = "drawable-port-hdpi";    Width = 480;  Height = 800 },
    @{ Folder = "drawable-port-xhdpi";   Width = 720;  Height = 1280 },
    @{ Folder = "drawable-port-xxhdpi";  Width = 960;  Height = 1600 },
    @{ Folder = "drawable-port-xxxhdpi"; Width = 1280; Height = 1920 }
)

foreach ($s in $splashes) {
    $spPath = Join-Path (Join-Path $resDir $s.Folder) "splash.png"
    Resize-Image -SourcePath $spMaster -DestPath $spPath -TargetWidth $s.Width -TargetHeight $s.Height -FillWhite $true
}

Write-Host "All Android icons and splashes successfully deployed!"

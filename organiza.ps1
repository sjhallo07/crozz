# Script para organizar el repositorio crozz-coin-project

# Define carpetas principales
$folders = @("docs", "src", "tests", "infrastructure", "governance")
foreach ($f in $folders) {
    if (Test-Path ".\crozz-coin-project\$f") {
        Move-Item ".\crozz-coin-project\$f" . -Force
    }
}

# Archivos raíz importantes
$files = @("LICENSE", "mkdocs.yml", "README.md", "ROADMAP.md", ".gitignore")
foreach ($file in $files) {
    if (Test-Path ".\crozz-coin-project\$file") {
        Move-Item ".\crozz-coin-project\$file" . -Force
    }
}

# Mueve el SDK/librería crozz-coin a src/
if (!(Test-Path ".\src\crozz-coin")) {
    New-Item -ItemType Directory ".\src\crozz-coin" | Out-Null
}
if (Test-Path ".\crozz-coin-project\crozz-coin") {
    Move-Item ".\crozz-coin-project\crozz-coin\*" ".\src\crozz-coin\" -Force
    Remove-Item ".\crozz-coin-project\crozz-coin" -Recurse -Force
}

# Elimina carpetas duplicadas y basura
$remove = @("crozz-coin-project", "crozz-coin-project-1")
foreach ($r in $remove) {
    if (Test-Path ".\$r") {
        Remove-Item ".\$r" -Recurse -Force
    }
}

# Estructura de carpetas y archivos
$structure = @{
    "docs"                = @()
    "src"                  = @("blockchain-node", "smart-contracts", "web-wallet-ui", "api-services", "crozz-coin")
    "tests"               = @()
    "infrastructure"      = @()
    "governance"         = @()
    "LICENSE"             = @()
    "mkdocs.yml"          = @()
    "README.md"           = @()
    "ROADMAP.md"          = @()
    ".gitignore"          = @()
}

# Crea la estructura de carpetas y archivos
foreach ($key in $structure.Keys) {
    $path = ".\$key"
    if ($structure[$key].Count -eq 0) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
    } else {
        foreach ($subfolder in $structure[$key]) {
            New-Item -ItemType Directory -Path "$path\$subfolder" -Force | Out-Null
        }
    }
}

Write-Host "Repositorio organizado. Revisa la estructura final."
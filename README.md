# SPS software

## Producción en IIS

La aplicación se compila para servirse desde la raíz de `https://spsdom.net/`.
En la carpeta `softwarepage`, ejecuta:

```powershell
npm ci
npm run build
```

Publica **el contenido** de `softwarepage\dist` (no la carpeta `dist` como
subdirectorio) en `C:\inetpub\wwwroot\SPS_New_Website`. Antes de reemplazar
archivos en el servidor, detén el sitio o su application pool y crea una copia
de seguridad completa de `SPS_New_Website`. Luego sincroniza la salida de
`dist` con `/MIR`; este modificador elimina del destino archivos antiguos que
ya no estén en la compilación, así que úsalo únicamente después de comprobar
ambas rutas y guardar la copia de seguridad:

```powershell
$source = "C:\ruta\al\repositorio\softwarepage\dist"
$destination = "C:\inetpub\wwwroot\SPS_New_Website"
$backup = "C:\inetpub\wwwroot\SPS_New_Website-backup-$(Get-Date -Format yyyyMMdd-HHmmss)"

Copy-Item -LiteralPath $destination -Destination $backup -Recurse
robocopy $source $destination /MIR /COPY:DAT /R:2 /W:2
if ($LASTEXITCODE -ge 8) { throw "Robocopy falló con el código $LASTEXITCODE" }
```

Confirma que el destino contenga directamente `index.html`, `web.config` y
`assets\` (incluidos los bundles generados). El IIS URL Rewrite Module debe
estar instalado para que `web.config` pueda atender rutas de la SPA. Una
solicitud a una ruta de aplicación inexistente puede cargar la SPA; una
solicitud a un archivo estático inexistente debe devolver 404, no `index.html`.

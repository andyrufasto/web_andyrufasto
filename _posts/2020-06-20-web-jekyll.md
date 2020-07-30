---
title: Ten una web interactiva sin saber diseño web
description: Todo el código necesario para una web parecida a  ésta
categories:
 - Linux
 - Web
tags: web
---

> Todo el código necesario para una web parecida a ésta.


## Instalación

Hay que comenzar teniendo actualizado [Ruby](https://www.ruby-lang.org/es/documentation/installation/):
```sh
$ sudo apt install ruby
```

Luego instalar [Jekyll](https://jekyllrb.com) :
```sh
$ sudo gem install bundler jekyll
```
Busca un [tema de Jekyll](https://jekyllrb.com/resources/), en este caso es el tema Next del usuario Simpleyyt en github, estará documentado para adaptarlo a lo que quieras. Y descargarlo, ingresa e ingresa a la carpeta.

Si lo clonas de github sería algo así:
```sh
$ git clone https://github.com/Simpleyyt/jekyll-theme-next.git
$ cd jekyll-theme-next
```
para instalar el tema:
```sh
$ bundle install
```
Ahora hay que iniciar el servidor de Ruby para ver el producto final:

```sh
$ bundle exec jekyll server
```
si hay errores en la configuración saldrán mensajes de error al generar la página.
Dentro de los mensajes el más importante es el de server address
```sh
Server address: https://127.0.0.1:4000
```
puedes darle click a esa dirección para ver el producto final en el navegador
Jekyll mientras este corriendo leerá automáticamente los cambios en `_post` y generará automáticamente los html de `_site` pero no la configuraciones de las otra carpetas, así que para hacer cambios en el tema tendrás que volver a correr el servidor con el comando `bundle exec jekyll serve` (después de cancelar la inicial obvio.)

## Configuración

La configuración del tema esta en el archivo `_config.yml` lee la documentación del tema para todos los detalles.
La carpeta `_site` el es producto final de los post en markdown ubicados en `_posts`, trata de no borrar los post ya que te pueden servir de guia para después. Solo muévalos a una carpeta.

No cambies nada en la carpeta `_site`  ya que cada vez que vuelvas a ejecutar jekyll se este generara todo el sitio web no sólo el post que editas

### _config.yml

No puedes olvidarte de cambiar estas cosas:

```yml
title: Titulo de la Página
baseurl: /nombre_de_la_carpeta
author: Nombre
```

Si mueves los post de defecto a una carpeta llamada `_drafts` no se verán a no ser que se especifique con el comando:
```sh
$ bundle exec jekyll serve --draft
```
Esto es bueno para ocultar artículos que todavía no están completados.

## Posts

Para añadir un post solo debes añadir un archivo con extensión `.md`markdown a la carpeta `_posts`. Markdown es mucho más fácil que html y te ahorrará mucho tiempo de edición.

Los archivos comienzan con la fecha, con el formato Año-mes-día-nombre del post.md, por ejemplo `2020-06-22-nuevo-post.md`

Con lo intuitivo que es ver un archivo de ejemplo con los que vienen los temas no hace falta extender en la sintaxis, pero si el encabezado.
### post.md

```md
---
title: Titulo de Post
layout: Comprueba si existen diferentes layouts
---
```
## Hosting

Puedes subirlo gratis en tu pagina de [GitHub](https://www.github.com), crea un nuevo repositorio con el nombre idéntico al que asignas en `baseurl` en tu `_config.yml`
En  settings cambia el branch a gh-pages

Pues ahora solo falta subir la página a github utilizando git:
```sh
# asegurate de iniciar el repositorio local en la carpeta
$ git init 
# asegurate de estar en el brach 'gh-pages'
$ git checkout -b gh-pages
$ git status
$ git add .
$ git commit -m "Primer commit"
```
>No voy a enseñarte a usar git en este post, si no sabes intenta solo subir todos los archivos al repositorio "arrastrando" a la interfaz web de github

Ahora si ya puedes vincularlo a tu repositorio
```
$ git remote add origin https://github.com/tuusuario/nombre_de_la_carpeta.git
$ git push
```
te pedirá tu usuario y contraseña de github.
Vuelve a asegurarte de que estés en el branch `gh-pages` en la web de github.

Tu URL pública debe ser http://tu_usuario.github.io/nombre_de_la_carpeta

Puedes adquirir un nombre de dominio para redirigir la URL a la de github para no tener un URL tan feo.
ay mucha documentación sobre todo esto si sabes inglés no vas a tener ningún problema salvo que escribas mal. En pocas horas podrás tener tu web, en realidad me he demorado más tiempo escribiendo este artículo que haciendo que funcione.

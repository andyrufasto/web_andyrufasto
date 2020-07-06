---
title: CLI-VIS  
description: Un vizualizador para lucir cool en internet
categories:
 - Linux
tags: linux pywal 
---
# CLI-VIS
[cli-visualizer](https://github.com/dpayne/cli-visualizer) es un visualizador de audio, simple y customizable.
![vis](/assets/images/post/cli-vis/vis.png)

cli-vis funciona con pulse-audio y alsa.

## Instalación

Para instalarlo antes anda a  su página de github para asegurarte de que tienes todos los prerequisitos instalados, allí estará todo el código si no es así.

```sh
$ git clone https://github.com/dpayne/cli-visualizer
$ cd cli-visualizer
$ ./install
```
Para ejecutarlo se utiliza el comando
```sh
$ vis
```
## Configuración

Los archivos de configuracion se guardan en `~/.config/vis/

# Pywal
[Pywal](https://github.com/dylanaraps/pywal) es un programa el cual detecta los colores de tu wallpaper y los aplica como tu tema en la terminal.
deja los colores detectados en `~/.cache/wal/` por lo que si quieres que el visualizador tengo los mismos colores que tu wallpaper y que tu terminal tienens que primero instalar pywal y ejecutar el programa.

```sh
$ pip3 install pywal
$ wal -i imagen.jpg
```

Luego es tan simple como  crear un simlink (como un acceso directo en windows) a los temas que utilizara el visualizador.
```sh
$ ln ~/.cache/wal/colors ~/.config/vis/colors/wal
```
ahora solo toca configurar el visualizador para que utilice el tema.
`````sh
#~/.config/vis/config
colors.scheme=wal
```
Ya está, ahora cada vez que cambies de wallpaper con pywal el visualizador tendra esos colores.
puedes actualizar los cambios de configuracion de vis con la tecla **r**

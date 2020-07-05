---
title: Cuál es la diferencia entre Bash, Shell y Terminal?
description: Sí, los tres son diferentes.
categories:
 - Teoria
 - Linux
tags: linux
---

## Bash
Bash es un interpretador de comandos, es al que le escribimos comandos y el que nos devuelve las ordenes en lenguaje de bash y shell.
Bash es el Shell de de GNU, el shell por defecto en la mayoria de distribuciones linux.
Bash puede ser configurado en `~/.bashrc`
Bash tiene su propia sintaxis, no es igual al sh aunque so tan similares que siempre se confunden.

## Shell
Un Shell es el que ejecuta los comandos entre los más comunes tambien se encuentran zsh, ksh, ash, fish...
puedes ver todos los shells instalados con `cat /etc/shells`
Tambien pueder saber cual shell estas corriendo con `echo $0` o `echo $SHELL`

## Terminal
Una terminal es el programa que corre en una interfaz gráfica, por qué elegir una u otra si solo es una ventana que usa letras?

Eso es porque diferentes terminales pueden tener interacciones con el mouse, copiar y pegar del portapapeles, cambiar las fuentes de letras, usar transparencia incluso renderizar imágenes.

Entre los terminales más comunes estan xterm, urxvt, konsole, st y mi favorito Alacritty, el cual no necesita mayor configuración para verse bien.

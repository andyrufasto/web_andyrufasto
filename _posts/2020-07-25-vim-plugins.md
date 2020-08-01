---
title: Plugins en Vim
description: Para un Vim más potente y amigable
image: 
categories:
 - Vim
tags: Vim 
---

> 

# VIM PLUGINS

Aunque la mayoría de las cosas que hacen los plugins que hay en vim se pueden hacer sin instalar nada, solo configurando, hay algunos que quizá necesites. En mi caso los plugins que utilizo son en su mayoría decorativo.


## Vundle
[Vundle](https://github.com/VundleVim/Vundle.vim.git) es el gestor de plugins de vim muy sencillo de usar, aunque en realidad los demás son muy parecidos.
Para instalarlo solo debes clonar ese repositorio en `~/.vim/bundle`:
```sh
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

## Uso (.vimrc):
```sh
~ set rtp+=~/.vim/bundle/vundle.vim
~
~ call vundle#begin(~/.vim/plugged)
~ Plugin 'path/github'
~ call vundle#end()
```
## Instalación (buffer)
```sh
:PluginInstall
```

# Mi vimrc
Yo tengo mi vimrc fragmentado en diferentes archivos, éste se llama `plugins.vimric` y en el `~/.vimrc` puedes decir que lea diferentes archivos adicionales con `source ~/.config/vim/plugins.vimrc`
Mantener tus configuraciones de vim de forma modular no solo te permite ser más ordenado sino identificar posibles fallas y corregir o eliminar de manera más rápida los errores de configuración.

{% gist 7a2bf4f310cbd0b4b17e442316810158 %}

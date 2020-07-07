---
title: Aliases en Bash
description: Una de las mejores herramientas en bash
categories:
 - Linux
tags: bash alias Linux
---
## Bashrc
Si lees `~/.bashrc` básicamente dice que es mejor no poner los alias en en un archivo diferente llamado `~/.bash_aliases` en lugar de añadirlos directamente al bashrc.

```sh
# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
     . ~/.bash_aliases
fi
```
Pero tener otro archivo de configuración al inicio es molesto, lo que yo hago es crear una carpeta dentro de `~/.config` que se llama bash y allí ordenar y separar los tipos de configuraciones de mi bash, una de ellas es mis aliases.
Por lo que en mi bashrc sera así:
```sh
source ~/.config/bash/alias.bashrc
```
## Aliases
Los aliases podemos entenderlo como abreviaturas a comandos más largos o difíciles de recordar.

Cualquier cosa puede ser un alias comandos con argumentos, scripts y comandos ya existentes.
Cuando te das cuenta que utilizas mucho un comando o un programa puedes ahorrarte mucho tiempo al añadir uno así como cuando te equivocas al ejecutar comandos a menudo.
```sh
$ alias grep="grep --color"
```
para listar los aliases 
```sh
$ alias
```
### Aliases más útiles
```sh
alias g="git"
alias glo="git log --oneline -5"
alias ll="ls -lhA"
alias please="sudo !!" # corre el ultimo comando con sudo
alias v="vim"
alias ps="ps aux | grep"
```
### Aliases inútiles pero divertidos.

Sólo disfruta

```sh
alias matrix='tr -c "[:digit:]" " " < /dev/urandom | dd cbs=$COLUMNS conv=unblock | GREP_COLOR="1;32" grep --color "[^ ]"'

alias rickroll="curl -s -L https://raw.githubusercontent.com/keroserene/rickrollrc/master/roll.sh | bash"

alias clock="while sleep 1; do tput sc; tput cup 0 $(($(tput cols)-29))    ; date; tput rc; done &"
```
### Ignorar aliases
existen 3 maneras de saltar el alias creado, con el comando `command`, dentro de comillas o con`\`

```sh
$ alias ls="ls --color=auto -F"
$ ls
$ command ls
$ \ls
$ 'ls'
```
### Borrar aliases
```sh
unalias ls
ls
```

---
title: Corrector ortográfico en Vim 
description: La ortografía es importante.
categories:
 - Linux
tags: Linux Vim
---
> La ortografía es importante.

![ ](/assets/images/post/vim-spell/vim-spell.png)

Todos los post de ésta página están escritas en Vim, se pueden hacer macros, abreviaturas, atajos de teclas...
Y el hecho de escribir sobre software tengo que escribir en dos idiomas simultáneamente y me suelo equivocar en la ortografía de ambos idiomas más veces de las que me gustaría aceptar.

Así que les mostraré como puedo escribir desde la terminal sin escribir tener fallos en inglés ni español.

## Configurar idiomas del corrector

Comienza editando tu `.vimrc` para reconocer ambos idiomas.
```
set spelllang=en,es
```
Para activar el corrector en el buffer `set spell!`
así podemos mapear la tecla **F7** para que ejecute ese comando:
```
nnoremap <F-7> :set spell!<Enter>
```
De esta manera al presionar **F7** subrayará las palabras que no estén en el diccionario.
La primera vez que lo hagas vim comenzará a descargar el diccionario, solo sigue la instalación aceptando todo.

## Agregar palabras al diccionario
Subrayará la palabra Linux y con **zg** se podrá añadir al diccionario. El buffer mostrará la palabra.
```
Word 'Linux' added to ~/.vim/spell/en.utf-8.add
```
## Corregir palabras
Para ir a la siguiente palabra _mal escrita_ escribe **z]** en modo normal, para ir a la palabra previa **z[**
Por ejemplo si escribimos la palabra **asi** y queremos cambiarla presionamos **z=** y saldrá el siguiente menú:

```
change "asi" to:
1 "así"
2 "as"
3 "ask"
4 "asa"
5 "ase"
6 "aso"
7 "aso"
8 "ass"
...

Type number and <Enter> or click with mouse (empty cancels): 
```
Escribe el número correspondiente a la palabra que sea más precisa y así se reemplazará.

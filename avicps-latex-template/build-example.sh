#!/bin/sh

latex latex-template
bibtex latex-template
latex latex-template
latex latex-template
dvips -t a4 -o latex-template.ps latex-template.dvi
ps2pdf latex-template.ps

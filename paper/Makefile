paper.pdf: paper.dvi
	dvipdfm paper.dvi

paper.dvi:  paper.tex tom.tex brian.tex evan.tex
	latex paper.tex

clean:  
	rm *.aux *.log

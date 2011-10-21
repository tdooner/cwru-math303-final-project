paper.pdf: paper.dvi
	dvipdfm paper.dvi
	rm -f ../TODO
	date > ../TODO
	grep TODO ./*.tex >> ../TODO

paper.dvi:  paper.tex tom.tex brian.tex evan.tex
	latex paper.tex
	bibtex paper
	latex paper.tex

clean:  
	rm *.aux *.log

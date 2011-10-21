paper.pdf: paper.dvi paper.bbl
	latex paper.tex
	latex paper.tex
	dvipdfm paper.dvi
	rm -f ../TODO
	date > ../TODO
	grep TODO ./*.tex >> ../TODO

paper.dvi:  paper.tex tom.tex brian.tex evan.tex
	latex paper.tex

paper.bbl:  paper.dvi
	bibtex paper

clean:  
	rm *.aux *.log *.bbl *.blg *.out *.pdf *.dvi

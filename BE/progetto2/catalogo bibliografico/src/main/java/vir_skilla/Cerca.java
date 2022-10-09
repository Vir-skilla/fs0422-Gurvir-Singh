package vir_skilla;

import java.util.Map;

//Interfaccia che dichiara i metodi che
//la classe Cerca dovra' implementare

public interface Cerca {
	
	// restituiscono una map che associa il valore Catalogo alla chiave String
	// ed accettano una stringa che verra' utilizzata per filtrare la ricerca
	
	public Map<String, Catalogo> cercaPerAutore(String autore);
	public Map<String, Catalogo> cercaPerAnno(String anno);
	public Map<String, Catalogo> cercaPerISBN(String isbn);

}

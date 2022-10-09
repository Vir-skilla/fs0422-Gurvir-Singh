package vir_skilla;

import java.util.HashMap;
import java.util.Map;

// Questa classe conservera' il nostro catalogo
public class Servizio {
	
	// dichiariamo un catalogo di tipo Map
	public Map<String, Catalogo> catalogoMain = new HashMap<>();
	
	// questi sono gli oggetti creati per il nostro catalogo
	Catalogo libro1 = new Libri("61FQKK73MP", "Bill Gates", "2013", 196, "Vir Skilla", "Comico");
	Catalogo libro2 = new Libri("TSYEG5NFYH", "Mark Zuckerberg", "2009", 265, "Facebook Instagram", "Psicologico");
	Catalogo libro3 = new Libri("IZDQ9L4E00", "Silvio Berlusconi", "1989", 321, "Zlatan Ibrahimovic", "Giallo");
	Catalogo libro4 = new Libri("38LDQD1GH6", "Cristiano Ronaldo", "2022", 777, "Lionel Messi", "Biografia");
	Catalogo libro5 = new Libri("03QK020UPU", "Steve Jobs", "2021", 126, "Sam Sung", "Psicologico");
	
	Catalogo rivista1 = new Riviste("XPO1RJ67VJ", "Putin", "2014", 36, Periodicita.MENSILE);
	Catalogo rivista2 = new Riviste("APCC2IK8SR", "Elon Musk", "2008", 75, Periodicita.SETTIMANALE);
	Catalogo rivista3 = new Riviste("30S973ZXZO", "Warren Buffet", "2010", 97, Periodicita.SEMESTRALE);
	Catalogo rivista4 = new Riviste("ON0ZIPHFGY", "Gurvir Singh", "2001", 69, Periodicita.MENSILE);
	Catalogo rivista5 = new Riviste("M86JSQ8PGK", "How to Hack", "2020", 29, Periodicita.SETTIMANALE);
	
	// Metodo per aggiungere gli oggetti al catalogo
	public void addElement(Catalogo element) {
		catalogoMain.put(element.getCodiceISBN(), element);
	}

	// Metodo per eliminare gli oggetti dal catalogo
	public void deleteElement(Catalogo element) {
		catalogoMain.remove(element.getCodiceISBN());
	}
	
	// Metodo con cui popoliamo la lista. Possiamo anche
	// popolare la lista accettando l'oggetto come parametro
	// ma per chiarezza faremo cosi'
	public Map<String, Catalogo> popolaLista(){
		
		addElement(libro1);
		addElement(libro2);
		addElement(libro3);
		addElement(libro4);
		addElement(libro5);
		
		addElement(rivista1);
		addElement(rivista2);
		addElement(rivista3);
		addElement(rivista4);
		addElement(rivista5);
		
		return catalogoMain;
	}
	
	

}
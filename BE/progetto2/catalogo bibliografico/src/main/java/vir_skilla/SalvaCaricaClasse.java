package vir_skilla;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;

// Questa classe implementa l'interfaccia creata in precedenza
public class SalvaCaricaClasse implements SalvaCarica {

	// Inizializziamo un catalogo
	public Map<String, Catalogo> catalogoMain;

	// Costruttore
	public SalvaCaricaClasse(Map<String, Catalogo> catalogoMain) {
		super();
		this.catalogoMain = catalogoMain;
	}

	// Definiamo il metodo salva che abbiamo dichiarato nell'interfaccia
	@Override
	public void salva() throws IOException {
		
		// Qua creiamo una stringa vuota e con il for
		// per ogni valore del catalogo, generera' una stringa aggiungendola a quella vuota
		String testoCatalogo = "";
		for (Catalogo c : catalogoMain.values()) {
			
			// la \n serve per andare a capo
			testoCatalogo += (c.toString() + ";" + "\n");
		}
		
		// creiamo il file catalogo.txt nel nostro progetto e 
		// ci scriviamo il contenuto creato precedentemente al suo interno
		// utilizzando la codifica utf-8 per mostrare i caratteri senza problemi
		File fileCatalogo = new File("./catalogo.txt");
		FileUtils.writeStringToFile(fileCatalogo, testoCatalogo, "UTF-8");

	}

	// Definiamo il metodo carica che abbiamo dichiarato nell'interfaccia
	@Override
	public List<String> carica() throws IOException {
		// Generiamo una lista
		List<String> leggiLista = new ArrayList<String>();
		
		// richiamiamo il file catalogo.txt
		File file = new File("./catalogo.txt");
		
		// nel leggiamo il contenuto, con la codifica utf-8
		String leggiStringa = FileUtils.readFileToString(file, "UTF-8");
		
		// splittiamo il contenuto dovunque ci sia \n
		String[] catalogo = leggiStringa.split("\n");
		
		// for che per ogni stringa del catalogo aggiunge la singola stringa
		// alla lista che abbiamo generato precedentemente
		for (String e : catalogo) {
			leggiLista.add(e);
		}
		
		// ritorniamo la lista popolata
		return leggiLista;
	}

}
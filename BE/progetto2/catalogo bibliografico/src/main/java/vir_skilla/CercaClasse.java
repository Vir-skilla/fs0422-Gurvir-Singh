package vir_skilla;
import java.util.Map;
import java.util.stream.Collectors;

// Classe che implementa i metodi dichiarati nell'interfaccia
public class CercaClasse implements Cerca {
	
	// Inizializziamo un catalogo
	public Map<String, Catalogo> mainCatalog;

	// Costruttore che popolera' il catalogo appena inizializzato
	public CercaClasse(Map<String, Catalogo> mainCatalog) {
		this.mainCatalog = mainCatalog;
	}

	// Definiamo i vari metodi dichiarati nell'interfaccia.
	// Sfruttiamo lo stream per applicare i filtri e restituire la
	// Map richiesta dai metodi. In questo caso la ricerca per autore
	// dovra' cercare solo sui libri (riviste non contiene autore come parametro)
	// attraverso un instanceof
	@Override
	public Map<String, Catalogo> cercaPerAutore(String autore) {
		return mainCatalog.values()
				.stream()
				.filter(e -> e instanceof Libri && ((Libri) e)
				.getAutore()
				.equals(autore))
				.collect(Collectors.toMap(c -> c.getCodiceISBN(), c -> c));
		
	}

	@Override
	public Map<String, Catalogo> cercaPerAnno(String anno) {
		return mainCatalog.values()
				.stream()
				.filter(e -> e.getAnnoPubblicazione()
				.equals(anno))
				.collect(Collectors.toMap(c -> c.getCodiceISBN(), c -> c));
	}

	@Override
	public Map<String, Catalogo> cercaPerISBN(String isbn) {
		return mainCatalog.values()
				.stream()
				.filter(e -> e.getCodiceISBN()
				.equals(isbn))
				.collect(Collectors.toMap(c -> c.getCodiceISBN(), c -> c));
	}

}
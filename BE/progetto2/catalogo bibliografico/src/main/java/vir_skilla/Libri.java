package vir_skilla;


//La classe Libri estende la classe Catalogo
public class Libri extends Catalogo {

	// Parametri 
	private String autore;
	private String genere;

	// Costruttore
	public Libri(String codiceISBN, String titolo, String annoPubblicazione, int numeroPagine, String autore, String genere) {
		super(codiceISBN, titolo, annoPubblicazione, numeroPagine);
		this.autore = autore;
		this.genere = genere;
	}

	// Getters e setters
	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public String getGenere() {
		return genere;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}

	// Questo metodo ci serve per stampare velocemente tutti i dettagli dell'oggetto 
	@Override
	public String toString() {
		return "Libro [ codice ISBN: " + codiceISBN + ", titolo: " + titolo + ", Anno di pubblicazione: " + annoPubblicazione
				+ ", N° di pagine: " + numeroPagine + ", autore: " + autore + ", genere: " + genere + " ]";
	}

}
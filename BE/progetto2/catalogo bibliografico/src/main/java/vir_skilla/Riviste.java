package vir_skilla;

//La classe Riviste estende la classe Catalogo
public class Riviste extends Catalogo {

	// Parametro: serve ad indicare che potra' assumere 
	// solo i valori presenti nella classe enum periodicita
	Periodicita periodicita;

	// Costruttore
	public Riviste(String codiceISBN, String titolo, String annoPubblicazione, int numeroPagine, Periodicita periodicita) {
		super(codiceISBN, titolo, annoPubblicazione, numeroPagine);
		this.periodicita = periodicita;
	}

	// Getters e setters
	public Periodicita getPeriodicita() {
		return periodicita;
	}

	public void setPeriodicita(Periodicita periodicity) {
		this.periodicita = periodicity;
	}

	// Questo metodo ci serve per stampare velocemente tutti i dettagli dell'oggetto 
	@Override
	public String toString() {
		return "Rivista [ codice ISBN: " + codiceISBN + ", titolo: " + titolo + ", Anno di pubblicazione: " + annoPubblicazione
				+ ", N° di pagine: " + numeroPagine + ", Periodicità: " + periodicita + " ]";
	}

}
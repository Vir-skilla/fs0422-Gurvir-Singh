package vir_skilla;

public abstract class Catalogo {

	// Parametri
		protected String codiceISBN;
		protected String titolo;
		protected String annoPubblicazione;
		protected int numeroPagine;

		// Costruttore
		public Catalogo(String codiceISBN, String titolo, String annoPubblicazione, int numeroPagine) {
			this.codiceISBN = codiceISBN;
			this.titolo = titolo;
			this.annoPubblicazione = annoPubblicazione;
			this.numeroPagine = numeroPagine;
		}

		// Getters e setters
		public String getCodiceISBN() {
			return codiceISBN;
		}

		public void setCodiceISBN(String codiceISBN) {
			this.codiceISBN = codiceISBN;
		}

		public String getTitolo() {
			return titolo;
		}

		public void setTitolo(String titolo) {
			this.titolo = titolo;
		}

		public String getAnnoPubblicazione() {
			return annoPubblicazione;
		}

		public void setAnnoPubblicazione(String annoPubblicazione) {
			this.annoPubblicazione = annoPubblicazione;
		}

		public int getNumeroPagine() {
			return numeroPagine;
		}

		public void setNumeroPagine(int numeroPagine) {
			this.numeroPagine = numeroPagine;
		}

	
}

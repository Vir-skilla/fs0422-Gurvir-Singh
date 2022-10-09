package vir_skilla;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public class Program {

	public static void main(String[] args) throws IOException {
		
		// Creiamo un catalogo lanciando il metodo popolaLista
		Map<String, Catalogo> catalogoMain = new Servizio().popolaLista();
		
		// Ci servono tutti i metodi per la ricerca, quindi inseriamo il catalogo come parametro
		// della classe che li contiene
		Cerca cerca = new CercaClasse(catalogoMain);
		
		// inizializziamo anche la classe con i metodi 
		// per il salvataggio/caricamento dei dati su hard disk
		SalvaCarica sC = new SalvaCaricaClasse(catalogoMain);

		// Stampiamo prima il catalogo completo e testiamo i vari metodi sotto
		System.out.println("**** CATALOGO COMPLETO: ****");
		catalogoMain.forEach((k, v) -> System.out.println(v));
		System.out.println("----------------------------");
		System.out.println("");

		// Testiamo la ricerca per anno creando un catalogo ad hoc per questa ricerca
		System.out.println("**** RICERCA PER ANNO: (2022) ****");
		Map<String, Catalogo> catalogoFiltratoAnno = cerca.cercaPerAnno("2022");
		catalogoFiltratoAnno.forEach((k,v)->System.out.println(k + " " + v));
		System.out.println("----------------------------");
		System.out.println("");
		
		// Stessa cosa...
		System.out.println("**** RICERCA PER AUTORE: (Zlatan Ibrahimovic) ****");
		Map<String, Catalogo> catalogoFiltratoAutore = cerca.cercaPerAutore("Zlatan Ibrahimovic");
		catalogoFiltratoAutore.forEach((k,v)->System.out.println(k + " " + v));
		System.out.println("----------------------------");
		System.out.println("");

		// Stessa cosa...
		System.out.println("**** RICERCA PER CODICE ISBN: (ISBN: 03QK020UPU)****");
		Map<String, Catalogo> catalogoFiltratoISBN = cerca.cercaPerISBN("03QK020UPU");
		catalogoFiltratoISBN.forEach((k,v)->System.out.println(k + " " + v));
		System.out.println("----------------------------");
		System.out.println("");

		// Salviamo e carichiamo i dati sul disco invocando 
		//i metodi della classe inizializzata precedentemente
		System.out.println("**** SALVIAMO SU DISCO... ****");
		sC.salva();
		System.out.println("**** ... ****");
		System.out.println("**** ..... ****");
		System.out.println("**** ....... ****");
		System.out.println("----------------------------");
		System.out.println("");

		System.out.println("**** LETTURA (DOPO SCRITTURA) SU DISCO: ****");
		List<String> prova = sC.carica();
		prova.forEach(System.out::println);

	}


}
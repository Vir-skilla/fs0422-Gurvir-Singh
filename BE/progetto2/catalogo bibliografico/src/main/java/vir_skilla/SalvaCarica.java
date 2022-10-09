package vir_skilla;

import java.io.IOException;
import java.util.List;

// Questa interfaccia serve a dichiarare quali metodi la classe dovra' implementare
public interface SalvaCarica {
	
	// Lancia un eccezione ma non ritorna niente
	public void salva() throws IOException;
	
	// Lancia un eccezione e ritorna una lista di stringhe
	public List<String> carica() throws IOException;

}
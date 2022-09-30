package LettoreMultimediale;

import java.util.Scanner;

public class Filmato extends Multimedia implements Volume, luminosità{
    private int luminosità;
    private int volume;
    private int durata;

    public Filmato(String titolo, int luminosità, int volume, int durata) {
        super(titolo);
        this.luminosità = luminosità;
        this.volume = volume;
        this.durata = durata;
    }

    public void editSettings(Scanner in)
    {
        int luminosità,volume;
        System.out.println("Inserire nuovo valore di Luminosità per " + getTitolo());
        luminosità = in.nextInt();
        in.nextLine();
        if (this.luminosità > luminosità)
            darker(luminosità);
        else
            brighter(luminosità);

        System.out.println("Inserire il nuovo valore di Volume per " + getTitolo());
        volume = in.nextInt();
        in.nextLine();
        if (this.volume > volume)
            weaker(volume);
        else
            louder(volume);
    }
    public void start()
    {
        play();
    }

    public void play() {
    	for(int d = 0; d < durata; d++) {
    		System.out.print(getTitolo());
    		for(int l = 0; l < luminosità; l++) {
    			System.out.print("*");
    		}
    		for(int v = 0; v < volume; v++) {
    			System.out.print("!");
    		}
    		System.out.println();
    	}
    }
    	

	@Override
	public void brighter(int bright) {
		this.luminosità = bright;
	}

	@Override
	public void darker(int dark) {
		this.luminosità = dark;	
	}

	@Override
	public void weaker(int weak) {
		this.volume = weak;
	}

	@Override
	public void louder(int loud) {
		this.volume = loud;
	}


}

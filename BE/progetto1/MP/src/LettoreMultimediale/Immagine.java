package LettoreMultimediale;

import java.util.Scanner;

public class Immagine extends Multimedia implements luminosità {
	private int luminosità;

    public Immagine(String titolo, int luminosità) {
        super(titolo);
        this.luminosità = luminosità ;
    }

    public void editSettings(Scanner in)
    {
        int luminosità;
        System.out.println("Inserire nuovo valore di Luminosità per " + getTitolo());
        luminosità = in.nextInt();
        in.nextLine();
        if (this.luminosità > luminosità)
            darker(luminosità);
        else
            brighter(luminosità);
    }
    public void start()
    {
        show();
    }

    public void show() {
        System.out.print(getTitolo());
        for(int a = 0; a < luminosità; a++) {
        	System.out.print("*");
        }
        System.out.println();
    }

	@Override
	public void brighter(int bright) {
		if (bright > this.luminosità) this.luminosità = bright;
        else System.out.println("valore inserito inferiore o uguale");
		
	}

	@Override
	public void darker(int dark) {
		if (dark < this.luminosità) this.luminosità = dark;
        else System.out.println("valore inserito superiore o uguale");
		
	}

   



}

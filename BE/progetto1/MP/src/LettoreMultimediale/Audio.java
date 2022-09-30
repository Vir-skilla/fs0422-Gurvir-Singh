package LettoreMultimediale;

import java.util.Scanner;

public class Audio extends Multimedia implements Volume {
    private int volume;
    private int durata;

    public Audio(String titolo, int volume, int durata) {
        super(titolo);
        this.volume = volume;
        this.durata = durata;
    }

    public void start()
    {
        play();
    }

    /*per facilitare il menù. modifica parametri
    dell'oggetto indipendentemente se audio o video */
        public void editSettings(Scanner in) {
  
        int volume = 0;
        System.out.println("Inserire il nuovo valore di Volume per " + getTitolo());
        volume = in.nextInt();
        in.nextLine();
        if (this.volume > volume)
            weaker(volume);
        else
            louder(volume);
    }

    public void play() {
            for (int b = 0; b < this.durata; b++) {
                System.out.print(getTitolo());
                for (int a = 0; a < this.volume; a++) {
                    System.out.print("!");
        }
            System.out.println();
        }
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


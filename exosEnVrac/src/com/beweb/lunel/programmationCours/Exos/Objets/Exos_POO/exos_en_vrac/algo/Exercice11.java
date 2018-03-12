package com.beweb.lunel.programmationCours.Exos.Objets.Exos_POO.exos_en_vrac.algo;

public class Exercice11 
{
    public static void launch()
    { 
        int[] nbPair = new int[0];
        int[] nbImpair = new int[0];
        int[] multiplesDeTrois = new int[0];
        int[] multiplesDeCinq = new int[0];
        int[] suite = new int[48];
        
        for(int i =0 ; i<suite.length ; i++)
        {
            switch (i)
            {
                case 0 :
                    suite[i] = 0;
                    break;
            
                case 1:
                    suite[i]=1;
                    break;
            
                default:
                    suite[i]=suite[i-1]+suite[i-2];
            }
            System.out.println(suite[i]); 
        }
    }
}


            
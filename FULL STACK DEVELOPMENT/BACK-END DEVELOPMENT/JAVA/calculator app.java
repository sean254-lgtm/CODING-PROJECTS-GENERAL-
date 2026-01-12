
import java.util.Scanner;

class main{
    public static void main(String [] args){
        Scanner Scanner=new Scanner(System.in);
        System.out.println("Enter value a: ");
        String a=Scanner.nextLine();
        System.out.println("Enter an operation: ");
        String op=Scanner.nextLine();
        System.out.println("Enter value b: ");
        String b=Scanner.nextLine();
        if(op.equals("+")){
            System.out.println(a+b);
        }else if(op.equals("-")){
            System.out.println(a-b);
        }else if(op.equals("/")){
            System.out.println(a/b);
        }else if(op.equals("*")){
            System.out.println(a*b);
        }else{
            System.out.println("error");
        }
        Scanner.close();
    }
}
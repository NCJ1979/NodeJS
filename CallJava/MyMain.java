public class MyMain
{
	
	public static void main(String[] args)
	{
		
		//System.out.println("Hello World" + args[0] + ":" + args[1] + ":" + args[2]);
		//if (true)
		//	return;
		
		if (args.length == 3)
		{
			if (args[2].equals("ADD"))
			{
				System.out.print(Integer.parseInt(args[0]) + Integer.parseInt(args[1]));
			}
			else if (args[2].equals("MUL"))
			{
				System.out.print(Integer.parseInt(args[0]) * Integer.parseInt(args[1]));
			}

		}
	}

}
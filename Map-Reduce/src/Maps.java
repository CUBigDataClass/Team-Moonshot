import java.io.IOException;
import java.util.StringTokenizer;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class Maps extends Mapper<LongWritable,Text,Text,IntWritable> {

	
	public void map(LongWritable key, Text val, Context context) throws IOException, InterruptedException
	{
		String str = val.toString();
		StringTokenizer tokenizer = new StringTokenizer(str, ",;: ");
	//	StringTokenizer tokenizer = new StringTokenizer(str);
		while(tokenizer.hasMoreTokens())
		{
			String st = tokenizer.nextToken();
		   
		   if(st.equals("wine") || st.equals("beer") || st.equals("Vodka") 
				   || st.equals("whiskey")
				   
				   || st.equals("Rum") || st.equals("Tequila"))
		   {
		    context.write(new Text("Alchohol	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("sneakers") || st.equals("sports shoes") || st.equals("sandals") || st.equals("heels")
				   ||st.equals("boots") || st.equals("spike shoes"))
		   {
			   context.write(new Text("FootWear	" + st),new IntWritable(1));
		   }
		
		   else if(st.equals("aviator") || st.equals("wayfarer") || st.equals("digital watch") || st.equals("skeleton watch")
				   || st.equals("analog watch") || st.equals("leather waller"))
		   {
			   context.write(new Text("Accessories	" + st),new IntWritable(1));
		   }
		
		   else if(st.equals("dslr") || st.equals("tablet") || st.equals("playstation"))
		   {
			   context.write(new Text("Electronics	" + st),new IntWritable(1));
		   }
		
		   else if(st.equals("laptop bag") || st.equals("RuckSack") || st.equals("Traveler bag") || st.equals("baguette bag")
				   || st.equals("duffle bag") || st.equals("sling bag") || st.equals("shoulder bag"))
		   {
			   context.write(new Text("Bags	" + st),new IntWritable(1));
		   }
		
		   else if(st.equals("bucket bag") || st.equals("clutch bag") || st.equals("hobo bag") || st.equals("fold over clutch")
				   || st.equals("messenger bag") || st.equals("Minaudiere") || st.equals("Satchel") || st.equals("Wristlet"))
		   {
			   context.write(new Text("Female Bags	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("SkateBoard") || st.equals("roller skates") || st.equals("hoverboard") || st.equals("electric scooter")
				   || st.equals("surfing board") )
		   {
			   context.write(new Text("Skating and Skiing	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("Hairgel") || st.equals("hairspray") || st.equals("hairoil") || st.equals("hairwax")
				   || st.equals("bodyspray") || st.equals("showergel") || st.equals("shampoo") || st.equals("hair conditioner") || st.equals("hair color")
				   || st.equals("sunscreen") || st.equals("moisturizer") || st.equals("nailpaint") || st.equals("lipstick") || st.equals("lipgloss")
				   || st.equals("eyeliner"))
		   {
			   context.write(new Text("Cosmetics	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("Juice") || st.equals("tea") || st.equals("coffee") || st.equals("energy drink")
				   || st.equals("mineralwater"))
		   {
			   context.write(new Text("Drinks	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("Whole milk") || st.equals("skim milk") || st.equals("flavored milk") || st.equals("lactose free milk")
				   || st.equals("evaporated milk") || st.equals("condensedmilk") || st.equals("buttermilk"))
		   {
			   context.write(new Text("Milk	" + st),new IntWritable(1));
		   }
		   
		   else if(st.equals("Cookie") || st.equals("Donut") || st.equals("pastry") || st.equals("cheesecake")
				   || st.equals("pancake") || st.equals("icecream") || st.equals("chocolate"))
		   {
			   context.write(new Text("Chocs	" + st),new IntWritable(1));
		   }
		   
		  
		   
		}
		
	}
}

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
		
		}
		
	}
}

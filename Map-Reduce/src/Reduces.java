import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class Reduces extends Reducer<Text,IntWritable,Text,IntWritable>{

	public void reduce(Text str, Iterable<IntWritable> freq,Context context) throws IOException,InterruptedException
	{
		ArrayList<IntWritable> arr = new ArrayList<IntWritable>();
		int x;
//		for(IntWritable t: freq)
//		{
//		arr.add(t);
//		}
//		Integer[] z = new Integer[arr.size()];
//		z = arr.toArray();
int	s = 0;
for(IntWritable i : freq)
{
	s = s+i.get();
}



//		for(int i = 0;i<z.length;i++)
//		{
//			s = s + z[i];
//		}
	context.write(str, new IntWritable(s));
	}
}

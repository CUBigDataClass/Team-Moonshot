import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.FileInputFormat;
import org.apache.hadoop.mapred.lib.FilterOutputFormat;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;

public class driver {

public static void main(String args[]) throws Exception
{
	Configuration conf = new Configuration();
	Job job = new Job(conf);
	job.setJarByClass(driver.class);
	job.setMapperClass(Maps.class);
	job.setNumReduceTasks(4);
	job.setPartitionerClass(WordCountPartitioner.class);
	job.setCombinerClass(Reduces.class);
	
	job.setReducerClass(Reduces.class);
	job.setMapOutputKeyClass(Text.class);
//	job.setMapOutputKeyClass(Twin.class);
	job.setMapOutputValueClass(IntWritable.class);
	//job.setMapOutputValueClass(Twin.class);
	job.setOutputKeyClass(Text.class);
	job.setOutputValueClass(IntWritable.class);
	job.setInputFormatClass(TextInputFormat.class);
	job.setOutputFormatClass(TextOutputFormat.class);
//	job.setOutputFormatClass(KeyBasedMultipleOutputFormat.class); // custom format class.
	
Path output = new Path(args[1]);
org.apache.hadoop.mapreduce.lib.input.FileInputFormat.addInputPath(job, new Path(args[0]));
org.apache.hadoop.mapreduce.lib.output.FileOutputFormat.setOutputPath(job, new Path(args[1]));



System.exit(job.waitForCompletion(true)?0:1);

}




}

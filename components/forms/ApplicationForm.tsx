"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const applicationSchema = z.object({
  whatBuilding: z.string().min(10, "Please describe what you're building (at least 10 characters)"),
  stage: z.enum(["idea", "prototype", "early-users", "scaling"], {
    required_error: "Please select your current stage",
  }),
  budget: z.enum(["under-5k", "5k-10k", "10k-20k", "20k-plus"], {
    required_error: "Please select your budget range",
  }),
  timeline: z.enum(["asap", "1-2-months", "3-6-months", "6-plus-months"], {
    required_error: "Please select your timeline",
  }),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      whatBuilding: "",
      stage: undefined,
      budget: undefined,
      timeline: undefined,
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    // TODO: Implement form submission to API
    console.log("Form data:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-card rounded-2xl p-12 shadow-card border border-border text-center">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
          Application submitted!
        </h2>
        <p className="text-muted-foreground mb-6">
          We&apos;ve received your application and will review it within 24 hours. 
          You&apos;ll hear from us soon.
        </p>
        <Button variant="hero-outline" onClick={() => setIsSubmitted(false)}>
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="whatBuilding"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are you building?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your product, idea, or project in detail..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Help us understand your vision and goals.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current stage</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current stage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="idea">Just an idea</SelectItem>
                    <SelectItem value="prototype">Have a prototype</SelectItem>
                    <SelectItem value="early-users">Early users / beta</SelectItem>
                    <SelectItem value="scaling">Scaling / growing</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Where are you in your product journey?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Budget range</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-5k" id="under-5k" />
                      <label htmlFor="under-5k" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Under $5,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5k-10k" id="5k-10k" />
                      <label htmlFor="5k-10k" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        $5,000 - $10,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-20k" id="10k-20k" />
                      <label htmlFor="10k-20k" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        $10,000 - $20,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20k-plus" id="20k-plus" />
                      <label htmlFor="20k-plus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        $20,000+
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormDescription>
                  What&apos;s your budget for this project?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Timeline</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="asap" id="asap" />
                      <label htmlFor="asap" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        ASAP
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-2-months" id="1-2-months" />
                      <label htmlFor="1-2-months" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        1-2 months
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-6-months" id="3-6-months" />
                      <label htmlFor="3-6-months" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        3-6 months
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-plus-months" id="6-plus-months" />
                      <label htmlFor="6-plus-months" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        6+ months
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormDescription>
                  When do you want to start?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Submit Application
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;


'use client';

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { FileText, Check, X, CreditCard, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingPage = () => {
  const { user, updateSubscription } = useAuth();
  const [subscribing, setSubscribing] = useState<string | null>(null);

  const handleSubscribe = async (tier: string) => {
    setSubscribing(tier);
    await new Promise(resolve => setTimeout(resolve, 2000));
    updateSubscription(tier);
    setSubscribing(null);
  };

  const isCurrentPlan = (tier: string) => user?.subscriptionTier === tier;

  return (
    <div className="min-h-screen bg-fintech-dark-purple text-white">
      {/* Header */}
      <header className="container mx-auto pt-10 pb-8 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-fintech-purple text-white">
              <FileText className="h-5 w-5" />
            </div>
            <span className="ml-3 text-xl font-bold">FinAPI Sandbox</span>
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your development needs.
            All plans include access to our sandbox environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["basic", "pro", "enterprise"].map(tier => {
            const plans = {
              basic: {
                name: "Basic",
                price: "$9",
                features: [
                  "Up to 1,000 API calls/month",
                  "Basic transaction history",
                  "Balance checking",
                  "Fund transfers",
                ],
                missing: [
                  "Advanced analytics",
                  "Custom invoice generation"
                ]
              },
              pro: {
                name: "Professional",
                price: "$29",
                features: [
                  "Up to 10,000 API calls/month",
                  "Advanced transaction history",
                  "Balance checking",
                  "Fund transfers",
                  "Advanced analytics",
                ],
                missing: [
                  "Custom invoice generation"
                ]
              },
              enterprise: {
                name: "Enterprise",
                price: "$99",
                features: [
                  "Unlimited API calls",
                  "Full transaction history",
                  "Balance checking",
                  "Fund transfers",
                  "Advanced analytics",
                  "Custom invoice generation"
                ],
                missing: []
              }
            };

            const { name, price, features, missing } = plans[tier as keyof typeof plans];
            const isCurrent = isCurrentPlan(tier);

            return (
              <Card key={tier} className={`flex flex-col ${isCurrent ? "border-fintech-purple" : "border-white/10"} bg-secondary/30 backdrop-blur-sm`}>
                <CardHeader className="pb-8 pt-6">
                  {isCurrent && <Badge className="mb-4 self-start bg-fintech-purple">Current Plan</Badge>}
                  {tier === "pro" && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-fintech-purple">Popular</Badge>
                    </div>
                  )}
                  <CardTitle className="text-2xl">{name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {tier === "basic" && "Perfect for small projects"}
                    {tier === "pro" && "For growing applications"}
                    {tier === "enterprise" && "For serious applications"}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li key={i} className="flex">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {missing.map((m, i) => (
                      <li key={i} className="flex">
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{m}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    className={`w-full ${isCurrent ? "bg-secondary/50 hover:bg-secondary/70" : "bg-fintech-purple hover:bg-fintech-purple/90"}`}
                    disabled={isCurrent || subscribing !== null}
                    onClick={() => handleSubscribe(tier)}
                  >
                    {subscribing === tier ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : isCurrent ? (
                      "Current Plan"
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>

      {/* FAQ */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How does billing work?",
                answer:
                  "All plans are billed monthly and you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time. You'll have access to your current plan until the end of your billing period.",
              },
              {
                question: "Do you offer custom plans?",
                answer:
                  "Yes, if you need a custom plan with specific requirements, please contact us and we'll work with you to create a tailored solution.",
              },
              {
                question: "What happens if I exceed my API call limit?",
                answer:
                  "If you exceed your monthly API call limit, additional calls will still be processed, but you'll be charged an overage fee. Consider upgrading to a higher tier if you regularly exceed your limit.",
              },
            ].map(({ question, answer }, i) => (
              <div key={i} className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">{question}</h3>
                <p className="text-gray-300">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-fintech-purple text-white mr-2">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">FinAPI Sandbox</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} FinAPI Sandbox. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;

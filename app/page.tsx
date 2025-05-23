'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Lock, Shield, Database } from 'lucide-react';

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-fintech-dark-purple text-white flex flex-col">
      {/* Header/Hero section */}
      <header className="container mx-auto pt-16 pb-20 px-4 md:px-6 text-center lg:pt-24">
        <div className="w-full max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 rounded-full bg-white/10 text-fintech-purple text-sm font-medium mb-6">
            Developer Sandbox
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Build and test with the <span className="text-fintech-purple">FinAPI</span> sandbox
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Explore our financial API in a safe, secure sandbox environment.
            Create accounts, transfer funds, and generate reports without touching real money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-fintech-purple hover:bg-fintech-purple/90"
              onClick={() => router.push('/register')}
            >
              Start building
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/login')}
            >
              Login to dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="bg-secondary/20 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful API Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to test your financial applications in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Account Balances',
                icon: <Database className="h-6 w-6 text-fintech-purple" />,
                desc: 'Create test accounts and manage balances. View transaction history and account details in a secure environment.'
              },
              {
                title: 'Secure Transfers',
                icon: <Lock className="h-6 w-6 text-fintech-purple" />,
                desc: 'Test fund transfers between accounts with realistic latency and security measures that mirror production systems.'
              },
              {
                title: 'Generate Invoices',
                icon: <FileText className="h-6 w-6 text-fintech-purple" />,
                desc: 'Create and download test invoices. Customize fields and test your application\'s invoice handling capabilities.'
              },
              {
                title: 'JWT Authentication',
                icon: <Shield className="h-6 w-6 text-fintech-purple" />,
                desc: 'Practice with industry-standard authentication. All API endpoints use JWT tokens for secure access.'
              },
              {
                title: 'Detailed Transactions',
                icon: <FileText className="h-6 w-6 text-fintech-purple" />,
                desc: 'View comprehensive transaction data with filtering and pagination. Perfect for testing reporting features.'
              },
              {
                title: 'Rate Limiting',
                icon: <Database className="h-6 w-6 text-fintech-purple" />,
                desc: 'Experience realistic API rate limiting to ensure your applications handle throttling gracefully.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-secondary/30 rounded-xl p-6 backdrop-blur-sm border border-white/5"
              >
                <div className="h-12 w-12 bg-fintech-purple/20 rounded-lg flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto py-20 px-4 md:px-6 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Create your account now and start testing your financial applications in our secure sandbox environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-fintech-purple hover:bg-fintech-purple/90"
              onClick={() => router.push('/register')}
            >
              Register for free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/pricing')}
            >
              View pricing plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 px-4 md:px-6 mt-auto">
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

export default Home;

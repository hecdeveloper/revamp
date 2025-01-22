import { Code2, GitBranch, Rocket, TestTube } from 'lucide-react';

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Standard Delivery Methodology
          </h2>
          <p className="text-xl text-gray-600">
            We follow a tailored hybrid-agile approach that combines structured planning with flexible execution
          </p>
        </div>

        {/* Main Process Flow */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
            alt="Development Process"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="h-8 w-8 text-blue-600" />,
                title: 'Core Development',
                description: 'Structured development of core platform components'
              },
              {
                icon: <GitBranch className="h-8 w-8 text-blue-600" />,
                title: 'Sprint Cycles',
                description: 'Iterative development with daily scrums and sprint planning'
              },
              {
                icon: <TestTube className="h-8 w-8 text-blue-600" />,
                title: 'Quality Assurance',
                description: 'Comprehensive testing and regression analysis'
              },
              {
                icon: <Rocket className="h-8 w-8 text-blue-600" />,
                title: 'Deployment',
                description: 'Controlled releases with monitoring and feedback'
              }
            ].map((step) => (
              <div key={step.title} className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sprint Process */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Sprint Process</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Sprint Planning</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>Backlog refinement and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>Story point estimation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Sprint goal definition</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Daily Execution</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>15-minute daily standups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>Progress tracking and impediment removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Continuous integration and deployment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Quality Gates</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>Code review and pair programming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>Automated testing and QA validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Performance and security checks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Sprint Review</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>Demo of completed features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>Stakeholder feedback collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Retrospective and process improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
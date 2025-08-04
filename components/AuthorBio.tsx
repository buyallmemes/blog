export default function AuthorBio() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Author Photo */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            MF
          </div>
        </div>

        {/* Author Info & CTA */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Mark Fenderov
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              <strong>Staff Engineer at HelloFresh</strong> | Go/Java
              Architecture Expert
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              15+ years scaling systems, Oracle Java Professional, helping
              companies build robust architectures
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://linkedin.com/in/markfenderov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/mfenderov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Need architecture advice?</strong>
              <br />I help companies scale systems efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://calendly.com/markfenderov/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                📅 Book Consultation
              </a>
              <a
                href="https://linkedin.com/in/markfenderov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                💬 Message on LinkedIn
              </a>
            </div>
            <div className="mt-2 text-center">
              <a
                href="mailto:mark@fenderov.com"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                or email: mark@fenderov.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          <strong>Architecture Reviews:</strong> €2,000 fixed price •
          <strong> Hourly Consulting:</strong> €150/hour •
          <strong>Free 30-min consultation</strong> to discuss your needs
        </p>
      </div>
    </div>
  );
}

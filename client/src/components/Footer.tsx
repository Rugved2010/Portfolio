import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Rugved Recharla</h3>
          <p className="text-gray-400 mb-6">Software Engineer & IT Specialist</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:rugvedrecharla@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rugvedrecharla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="tel:+19166950441"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Phone size={24} />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2024 Rugved Recharla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

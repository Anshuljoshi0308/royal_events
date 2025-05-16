import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { Calendar, Users, DollarSign, Send, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  location: string;
  guestCount: string;
  budget: string;
  requirements: string;
  hearAboutUs: string;
}

const PlanEvent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    guestCount: '',
    budget: '',
    requirements: '',
    hearAboutUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const eventTypes = [
    { id: 'wedding', name: 'Wedding' },
    { id: 'corporate', name: 'Corporate Event' },
    { id: 'cultural', name: 'Cultural Celebration' },
    { id: 'private', name: 'Private Party' },
    { id: 'other', name: 'Other' }
  ];

  return (
    <>
      <PageHeader
        title="Plan Your Event"
        subtitle="Share your vision with us, and we'll help you create an unforgettable experience."
        backgroundImage="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="font-serif text-3xl font-bold text-royal-blue-800 mb-4">
                  Thank You for Your Event Inquiry!
                </h2>
                <p className="text-gray-600 mb-8">
                  We've received your event details and will get back to you within 24 hours to discuss your vision further 
                  and create a personalized plan.
                </p>
                <a href="/" className="btn btn-primary">
                  Return to Homepage
                </a>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex justify-between mb-10">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step <= currentStep
                            ? 'bg-royal-gold-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        } transition-colors duration-300`}
                      >
                        <span className="font-bold">{step}</span>
                      </div>
                      <span
                        className={`text-sm mt-2 ${
                          step <= currentStep ? 'text-royal-blue-800' : 'text-gray-500'
                        }`}
                      >
                        {step === 1 ? 'Personal Info' : step === 2 ? 'Event Details' : 'Confirmation'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="font-serif text-2xl font-bold text-royal-blue-800 mb-6">
                          Personal Information
                        </h2>

                        <div className="space-y-6">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                              placeholder="Your full name"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                                placeholder="Your email"
                              />
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                                placeholder="Your phone number"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="hearAboutUs" className="block text-gray-700 mb-2">
                              How did you hear about us?
                            </label>
                            <select
                              id="hearAboutUs"
                              name="hearAboutUs"
                              value={formData.hearAboutUs}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                            >
                              <option value="">Please select an option</option>
                              <option value="Social Media">Social Media</option>
                              <option value="Google">Google</option>
                              <option value="Friend">Friend or Family</option>
                              <option value="Previous Event">Previous Event</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-10 flex justify-end">
                          <button
                            type="button"
                            onClick={nextStep}
                            className="btn btn-primary"
                          >
                            Next Step
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Event Details */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="font-serif text-2xl font-bold text-royal-blue-800 mb-6">
                          Event Details
                        </h2>

                        <div className="space-y-6">
                          <div>
                            <label htmlFor="eventType" className="block text-gray-700 mb-2">
                              Event Type <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                              {eventTypes.map((type) => (
                                <div key={type.id}>
                                  <input
                                    type="radio"
                                    id={type.id}
                                    name="eventType"
                                    value={type.name}
                                    onChange={handleChange}
                                    className="sr-only"
                                    required
                                  />
                                  <label
                                    htmlFor={type.id}
                                    className={`block text-center py-2 px-3 border rounded-md cursor-pointer transition-colors ${
                                      formData.eventType === type.name
                                        ? 'bg-royal-blue-800 text-white border-royal-blue-800'
                                        : 'border-gray-300 hover:border-royal-blue-300'
                                    }`}
                                  >
                                    {type.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="date" className="block text-gray-700 mb-2">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  Event Date <span className="text-red-500">*</span>
                                </div>
                              </label>
                              <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                              />
                            </div>

                            <div>
                              <label htmlFor="location" className="block text-gray-700 mb-2">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  Preferred Location
                                </div>
                              </label>
                              <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                                placeholder="Event location or venue"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="guestCount" className="block text-gray-700 mb-2">
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  Expected Number of Guests <span className="text-red-500">*</span>
                                </div>
                              </label>
                              <select
                                id="guestCount"
                                name="guestCount"
                                value={formData.guestCount}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                              >
                                <option value="">Select a range</option>
                                <option value="1-50">1-50 guests</option>
                                <option value="51-100">51-100 guests</option>
                                <option value="101-200">101-200 guests</option>
                                <option value="201-500">201-500 guests</option>
                                <option value="501+">501+ guests</option>
                              </select>
                            </div>

                            <div>
                              <label htmlFor="budget" className="block text-gray-700 mb-2">
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-2" />
                                  Budget Range
                                </div>
                              </label>
                              <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                              >
                                <option value="">Select a budget range</option>
                                <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                                <option value="₹1 Lakh - ₹3 Lakh">₹1 Lakh - ₹3 Lakh</option>
                                <option value="₹3 Lakh - ₹5 Lakh">₹3 Lakh - ₹5 Lakh</option>
                                <option value="₹5 Lakh - ₹10 Lakh">₹5 Lakh - ₹10 Lakh</option>
                                <option value="₹10 Lakh+">₹10 Lakh+</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="requirements" className="block text-gray-700 mb-2">
                              Special Requirements & Additional Information
                            </label>
                            <textarea
                              id="requirements"
                              name="requirements"
                              value={formData.requirements}
                              onChange={handleChange}
                              rows={5}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-300"
                              placeholder="Tell us about your vision, theme preferences, special requests, or any other details that would help us plan your event."
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-10 flex justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Previous Step
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="btn btn-primary"
                          >
                            Next Step
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="font-serif text-2xl font-bold text-royal-blue-800 mb-6">
                          Review Your Information
                        </h2>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                          <h3 className="font-serif text-lg font-bold text-royal-blue-800 mb-4">
                            Personal Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-gray-600 text-sm">Full Name:</p>
                              <p className="font-medium">{formData.name}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm">Email Address:</p>
                              <p className="font-medium">{formData.email}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm">Phone Number:</p>
                              <p className="font-medium">{formData.phone}</p>
                            </div>
                            {formData.hearAboutUs && (
                              <div>
                                <p className="text-gray-600 text-sm">How you heard about us:</p>
                                <p className="font-medium">{formData.hearAboutUs}</p>
                              </div>
                            )}
                          </div>

                          <h3 className="font-serif text-lg font-bold text-royal-blue-800 mb-4">
                            Event Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-gray-600 text-sm">Event Type:</p>
                              <p className="font-medium">{formData.eventType}</p>
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm">Event Date:</p>
                              <p className="font-medium">{formData.date}</p>
                            </div>
                            {formData.location && (
                              <div>
                                <p className="text-gray-600 text-sm">Preferred Location:</p>
                                <p className="font-medium">{formData.location}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-gray-600 text-sm">Expected Guests:</p>
                              <p className="font-medium">{formData.guestCount}</p>
                            </div>
                            {formData.budget && (
                              <div>
                                <p className="text-gray-600 text-sm">Budget Range:</p>
                                <p className="font-medium">{formData.budget}</p>
                              </div>
                            )}
                          </div>

                          {formData.requirements && (
                            <div>
                              <p className="text-gray-600 text-sm">Special Requirements:</p>
                              <p className="font-medium">{formData.requirements}</p>
                            </div>
                          )}
                        </div>

                        <div className="mb-6 bg-royal-blue-50 p-4 rounded-md text-royal-blue-800 flex items-start">
                          <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <p>
                            After submitting your request, our team will review your event details 
                            and contact you within 24 hours to discuss next steps and create a 
                            customized plan for your special occasion.
                          </p>
                        </div>

                        <div className="mt-10 flex justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Previous Step
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary flex items-center"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="animate-spin mr-2">
                                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                </span>
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-2" />
                                Submit Request
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us For Your Event */}
      {!submitted && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose Us For Your Event</h2>
              <p className="section-subtitle">
                Discover the advantages of partnering with The Royal Events for your special occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">Experienced Team</h3>
                <p className="text-gray-600">
                  With over 5 years of experience and 500+ successful events, our team brings expertise and 
                  creativity to every project, ensuring flawless execution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">Customized Solutions</h3>
                <p className="text-gray-600">
                  We believe that every event is unique. Our approach involves understanding your vision and 
                  tailoring our services to create a personalized experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">End-to-End Management</h3>
                <p className="text-gray-600">
                  From conceptualization to execution, we handle every aspect of your event, allowing you to 
                  relax and enjoy the celebration without worry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">Creative Excellence</h3>
                <p className="text-gray-600">
                  Our creative team stays ahead of trends and brings innovative ideas to make your event 
                  stand out with unique themes, decor concepts, and experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">Attention to Detail</h3>
                <p className="text-gray-600">
                  We believe that perfection lies in the details. Our meticulous planning and execution 
                  ensure that every element of your event is flawless.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">Vendor Network</h3>
                <p className="text-gray-600">
                  Our established relationships with premium vendors and venues ensure high-quality services 
                  at competitive rates, adding value to your event.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PlanEvent;
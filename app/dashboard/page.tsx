
'use client';

import Header from '@/components/Header';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showNewCardModal, setShowNewCardModal] = useState(false);

  const virtualCards = [
    {
      id: '1',
      name: 'Business Expenses',
      number: '**** **** **** 4567',
      balance: '$2,450.00',
      limit: '$5,000.00',
      status: 'Active',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600'
    },
    {
      id: '2',
      name: 'Marketing Campaigns',
      number: '**** **** **** 8901',
      balance: '$1,230.00',
      limit: '$3,000.00',
      status: 'Active',
      color: 'bg-gradient-to-r from-green-500 to-teal-600'
    },
    {
      id: '3',
      name: 'Travel & Entertainment',
      number: '**** **** **** 2345',
      balance: '$890.50',
      limit: '$2,000.00',
      status: 'Frozen',
      color: 'bg-gradient-to-r from-orange-500 to-red-600'
    }
  ];

  const recentTransactions = [
    { id: '1', merchant: 'Amazon Web Services', amount: '-$245.00', date: '2024-01-15', card: 'Business Expenses', status: 'Completed' },
    { id: '2', merchant: 'Google Ads', amount: '-$450.00', date: '2024-01-14', card: 'Marketing Campaigns', status: 'Completed' },
    { id: '3', merchant: 'Uber', amount: '-$28.50', date: '2024-01-14', card: 'Travel & Entertainment', status: 'Completed' },
    { id: '4', merchant: 'Adobe Creative Suite', amount: '-$52.99', date: '2024-01-13', card: 'Business Expenses', status: 'Completed' },
    { id: '5', merchant: 'Airbnb', amount: '-$320.00', date: '2024-01-12', card: 'Travel & Entertainment', status: 'Pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fadeInUp">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">Manage your virtual cards and monitor transactions</p>
            </div>
          </ScrollAnimation>

          {/* Stats Cards */}
          <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Total Balance</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">$4,570.50</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="ri-wallet-line text-sm sm:text-base lg:text-xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Active Cards</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 text-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="ri-bank-card-line text-sm sm:text-base lg:text-xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">This Month</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">$1,096.49</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 text-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="ri-line-chart-line text-sm sm:text-base lg:text-xl"></i>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Transactions</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">47</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-100 text-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="ri-exchange-line text-sm sm:text-base lg:text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Tab Navigation */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8">
              <div className="border-b border-gray-200 overflow-x-auto">
                <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-4 sm:px-6 min-w-max">
                  {[
                    { id: 'overview', name: 'Overview', icon: 'ri-dashboard-line' },
                    { id: 'cards', name: 'Virtual Cards', icon: 'ri-bank-card-line' },
                    { id: 'transactions', name: 'Transactions', icon: 'ri-exchange-line' },
                    { id: 'settings', name: 'Settings', icon: 'ri-settings-line' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <i className={`${tab.icon} text-sm sm:text-base lg:text-lg`}></i>
                      <span className="hidden sm:inline">{tab.name}</span>
                      <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        <button 
                          onClick={() => setShowNewCardModal(true)}
                          className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-indigo-50 text-indigo-700 rounded-lg sm:rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer"
                        >
                          <i className="ri-add-circle-line text-lg sm:text-xl"></i>
                          <span className="font-medium text-sm sm:text-base">Create New Card</span>
                        </button>
                        <button className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-green-50 text-green-700 rounded-lg sm:rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                          <i className="ri-money-dollar-circle-line text-lg sm:text-xl"></i>
                          <span className="font-medium text-sm sm:text-base">Add Funds</span>
                        </button>
                        <button className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 text-purple-700 rounded-lg sm:rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                          <i className="ri-download-line text-lg sm:text-xl"></i>
                          <span className="font-medium text-sm sm:text-base">Export Data</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Recent Activity</h3>
                      <div className="space-y-3 sm:space-y-4">
                        {recentTransactions.slice(0, 3).map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="ri-store-line text-gray-600 text-sm sm:text-base"></i>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{transaction.merchant}</p>
                                <p className="text-xs sm:text-sm text-gray-500 truncate">{transaction.card}</p>
                              </div>
                            </div>
                            <div className="text-right ml-2">
                              <p className="font-medium text-gray-900 text-sm sm:text-base">{transaction.amount}</p>
                              <p className="text-xs sm:text-sm text-gray-500">{transaction.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'cards' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Your Virtual Cards</h3>
                      <button 
                        onClick={() => setShowNewCardModal(true)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer text-sm sm:text-base"
                      >
                        <i className="ri-add-line"></i>
                        <span>New Card</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                      {virtualCards.map((card) => (
                        <div key={card.id} className={`${card.color} p-4 sm:p-6 rounded-xl sm:rounded-2xl text-white relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                              <h4 className="font-semibold text-sm sm:text-base truncate pr-2">{card.name}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                card.status === 'Active' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
                              }`}>
                                {card.status}
                              </span>
                            </div>
                            <p className="text-base sm:text-lg font-mono mb-3 sm:mb-4">{card.number}</p>
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-xs sm:text-sm opacity-80">Balance</p>
                                <p className="text-lg sm:text-xl font-bold">{card.balance}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs sm:text-sm opacity-80">Limit</p>
                                <p className="text-sm sm:text-lg font-semibold">{card.limit}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'transactions' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Transaction History</h3>
                      <div className="flex space-x-2">
                        <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">Filter</button>
                        <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">Export</button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Card</th>
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {recentTransactions.map((transaction) => (
                              <tr key={transaction.id} className="hover:bg-gray-50">
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                                      <i className="ri-store-line text-gray-600 text-xs sm:text-sm"></i>
                                    </div>
                                    <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-24 sm:max-w-none">{transaction.merchant}</div>
                                  </div>
                                </td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">{transaction.card}</td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">{transaction.amount}</td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden md:table-cell">{transaction.date}</td>
                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                    transaction.status === 'Completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {transaction.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Account Settings</h3>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl gap-3 sm:gap-0">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">Transaction Notifications</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Get notified of all transactions via email</p>
                          </div>
                          <button className="bg-indigo-600 relative inline-flex h-5 w-9 sm:h-6 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
                            <span className="translate-x-4 sm:translate-x-5 inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl gap-3 sm:gap-0">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">Two-Factor Authentication</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Add an extra layer of security to your account</p>
                          </div>
                          <button className="bg-gray-200 relative inline-flex h-5 w-9 sm:h-6 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
                            <span className="translate-x-0 inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl gap-3 sm:gap-0">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">Marketing Communications</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Receive updates about new features and offers</p>
                          </div>
                          <button className="bg-indigo-600 relative inline-flex h-5 w-9 sm:h-6 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
                            <span className="translate-x-4 sm:translate-x-5 inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Danger Zone</h4>
                      <div className="border border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <h5 className="font-medium text-red-900 text-sm sm:text-base">Delete Account</h5>
                            <p className="text-xs sm:text-sm text-red-600">Permanently delete your account and all data</p>
                          </div>
                          <button className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* New Card Modal */}
      {showNewCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Create New Virtual Card</h3>
              <button 
                onClick={() => setShowNewCardModal(false)}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-gray-600 text-sm sm:text-base"></i>
              </button>
            </div>

            <form className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Name</label>
                <input 
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="e.g., Marketing Expenses"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Spending Limit</label>
                <input 
                  type="number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="1000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Type</label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-8 text-sm sm:text-base">
                  <option>Permanent Card</option>
                  <option>Temporary Card (30 days)</option>
                  <option>Single-use Card</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-3 sm:pt-4">
                <button 
                  type="button"
                  onClick={() => setShowNewCardModal(false)}
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Create Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

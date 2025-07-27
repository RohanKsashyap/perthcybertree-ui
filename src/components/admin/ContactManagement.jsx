import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, getApiEndpointWithId } from '../../config/api';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  CheckCircle, 
  MessageCircle, 
  Archive,
  Eye,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const statusColors = {
    new: 'bg-blue-500',
    read: 'bg-yellow-500',
    replied: 'bg-green-500',
    closed: 'bg-gray-500'
  };

  const statusIcons = {
    new: Mail,
    read: Eye,
    replied: MessageCircle,
    closed: Archive
  };

  const fetchContacts = async () => {
    try {
      const userData = localStorage.getItem('cybertree_user');
      if (!userData) {
        toast({
          title: "Error",
          description: "Admin authentication required",
          variant: "destructive"
        });
        return;
      }
      
      const { token } = JSON.parse(userData);
      if (!token) {
        toast({
          title: "Error",
          description: "Admin authentication required",
          variant: "destructive"
        });
        return;
      }

      const response = await fetch(API_ENDPOINTS.CONTACTS, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to fetch contacts",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error while fetching contacts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (contactId, newStatus) => {
    try {
      const userData = localStorage.getItem('cybertree_user');
      if (!userData) {
        toast({
          title: "Error",
          description: "Admin authentication required",
          variant: "destructive"
        });
        return;
      }
      
      const { token } = JSON.parse(userData);
      const response = await fetch(getApiEndpointWithId(API_ENDPOINTS.CONTACTS, contactId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `Contact status updated to ${newStatus}`,
        });
        fetchContacts(); // Refresh the list
      } else {
        toast({
          title: "Error",
          description: "Failed to update contact status",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error while updating status",
        variant: "destructive"
      });
    }
  };

  const deleteContact = async (contactId) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      const userData = localStorage.getItem('cybertree_user');
      if (!userData) {
        toast({
          title: "Error",
          description: "Admin authentication required",
          variant: "destructive"
        });
        return;
      }
      
      const { token } = JSON.parse(userData);
      const response = await fetch(getApiEndpointWithId(API_ENDPOINTS.CONTACTS, contactId), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Contact deleted successfully",
        });
        fetchContacts(); // Refresh the list
      } else {
        toast({
          title: "Error",
          description: "Failed to delete contact",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error while deleting contact",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Contact Management</h2>
        <Button
          onClick={fetchContacts}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-12">
          <Mail className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-400 text-lg">No contact submissions yet</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {contacts.map((contact) => {
            const StatusIcon = statusIcons[contact.status];
            return (
              <motion.div
                key={contact._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-semibold text-lg">{contact.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[contact.status]}`}>
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1">{contact.email}</p>
                    <p className="text-white font-medium mb-2">{contact.subject}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {formatDate(contact.createdAt)}
                    </p>
                    <p className="text-gray-300 line-clamp-2">{contact.message}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedContact(contact);
                        setShowDetails(true);
                      }}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    
                    {contact.status === 'new' && (
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact._id, 'read')}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        Mark Read
                      </Button>
                    )}
                    
                    {contact.status === 'read' && (
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact._id, 'replied')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Mark Replied
                      </Button>
                    )}
                    
                    {contact.status !== 'closed' && (
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact._id, 'closed')}
                        className="bg-gray-600 hover:bg-gray-700"
                      >
                        Close
                      </Button>
                    )}
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteContact(contact._id)}
                      className="border-red-500/20 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Contact Details Modal */}
      {showDetails && selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-white/10 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Contact Details</h3>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowDetails(false)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                ×
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Name</label>
                <p className="text-white font-medium">{selectedContact.name}</p>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">Email</label>
                <p className="text-white">{selectedContact.email}</p>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">Subject</label>
                <p className="text-white font-medium">{selectedContact.subject}</p>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">Message</label>
                <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">Status</label>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${statusColors[selectedContact.status]}`}>
                    {selectedContact.status}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="text-gray-400 text-sm">Submitted</label>
                <p className="text-white">{formatDate(selectedContact.createdAt)}</p>
              </div>
              
              {selectedContact.updatedAt !== selectedContact.createdAt && (
                <div>
                  <label className="text-gray-400 text-sm">Last Updated</label>
                  <p className="text-white">{formatDate(selectedContact.updatedAt)}</p>
                </div>
              )}
            </div>
            
            <div className="flex gap-2 mt-6">
              {selectedContact.status === 'new' && (
                <Button
                  onClick={() => {
                    updateContactStatus(selectedContact._id, 'read');
                    setShowDetails(false);
                  }}
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  Mark Read
                </Button>
              )}
              
              {selectedContact.status === 'read' && (
                <Button
                  onClick={() => {
                    updateContactStatus(selectedContact._id, 'replied');
                    setShowDetails(false);
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Mark Replied
                </Button>
              )}
              
              {selectedContact.status !== 'closed' && (
                <Button
                  onClick={() => {
                    updateContactStatus(selectedContact._id, 'closed');
                    setShowDetails(false);
                  }}
                  className="bg-gray-600 hover:bg-gray-700"
                >
                  Close
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={() => setShowDetails(false)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactManagement; 
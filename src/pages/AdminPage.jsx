import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Smartphone, Users, PlusCircle, ArrowLeft, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddServiceForm } from '@/components/admin/AddServiceForm';
import { AddProjectForm } from '@/components/admin/AddProjectForm';
import { AddEmployeeForm } from '@/components/admin/AddEmployeeForm';
import { DataContext } from '@/context/DataContext';
import { AuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

const AdminPage = () => {
  const [openDialog, setOpenDialog] = useState(null);
  // Edit modal state
  const [editItem, setEditItem] = useState(null);
  const { services, projects, team, addService, addProject, addEmployee, deleteProject, updateProject, deleteService, updateService, deleteEmployee, updateEmployee } = useContext(DataContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Placeholder update/delete functions (to be implemented in DataContext)

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const adminCards = [
    {
      title: 'Add New Service',
      description: 'Define a new service offering for your clients.',
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      dialog: 'service',
      form: <AddServiceForm setOpen={setOpenDialog} addService={addService} />,
    },
    {
      title: 'Add New Project',
      description: 'Showcase a recently completed project in your portfolio.',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      dialog: 'project',
      form: <AddProjectForm setOpen={setOpenDialog} addProject={addProject} />,
    },
    {
      title: 'Add New Employee',
      description: 'Introduce a new member to the CyberTree team.',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      dialog: 'employee',
      form: <AddEmployeeForm setOpen={setOpenDialog} addEmployee={addEmployee} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - CyberTree</title>
        <meta name="description" content="Admin dashboard for managing CyberTree's website content, including services, projects, and employees." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Admin Dashboard</h1>
              <p className="text-lg text-gray-300 mt-2">Manage your website content with ease.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Site
                </Link>
              </Button>
              <Button onClick={handleLogout} variant="outline" className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </motion.div>

          {/* Add forms */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {adminCards.map((card, index) => (
              <Dialog key={card.title} open={openDialog === card.dialog} onOpenChange={(isOpen) => !isOpen && setOpenDialog(null)}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => setOpenDialog(card.dialog)}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center bg-white/5 rounded-xl">
                          {card.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
                        <p className="text-gray-300 leading-relaxed">{card.description}</p>
                      </div>
                      <div className="mt-6 flex items-center text-cyan-400 font-semibold">
                        <PlusCircle className="mr-2 w-5 h-5" />
                        <span>Add Now</span>
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-slate-900/80 backdrop-blur-lg border-cyan-400/20 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-white">{card.title}</DialogTitle>
                  </DialogHeader>
                  {card.form}
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Employees Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Employees</h2>
            <ul className="space-y-2">
              {team.map(emp => (
                <li key={emp._id || emp.name} className="flex items-center justify-between bg-white/10 rounded p-3">
                  <span>{emp.name} ({emp.position || emp.title})</span>
                  <div>
                    <Button size="sm" variant="outline" onClick={() => setEditItem({ type: 'employee', ...emp })}>Edit</Button>
                    <Button size="sm" variant="destructive" className="ml-2" onClick={() => { if(window.confirm('Delete this employee?')) deleteEmployee(emp._id); }}>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service._id || service.name} className="flex items-center justify-between bg-white/10 rounded p-3">
                  <span>{service.name || service.title}</span>
                  <div>
                    <Button size="sm" variant="outline" onClick={() => setEditItem({ type: 'service', ...service })}>Edit</Button>
                    <Button size="sm" variant="destructive" className="ml-2" onClick={() => { if(window.confirm('Delete this service?')) deleteService(service._id); }}>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="space-y-2">
              {projects.map(project => (
                <li key={project._id || project.name} className="flex items-center justify-between bg-white/10 rounded p-3">
                  <span>{project.name || project.title}</span>
                  <div>
                    <Button size="sm" variant="outline" onClick={() => setEditItem({ type: 'project', ...project })}>Edit</Button>
                    <Button size="sm" variant="destructive" className="ml-2" onClick={() => { if(window.confirm('Delete this project?')) deleteProject(project._id); }}>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Edit Modal */}
          {editItem && (
            <Dialog open={!!editItem} onOpenChange={(open) => !open && setEditItem(null)}>
              <DialogContent className="bg-slate-900/80 backdrop-blur-lg border-cyan-400/20 text-white max-w-md mx-auto">
                <DialogHeader>
                  <DialogTitle>Edit {editItem.type.charAt(0).toUpperCase() + editItem.type.slice(1)}</DialogTitle>
                </DialogHeader>
                <EditForm item={editItem} onSave={async (updates) => {
                  let success = false;
                  if (editItem.type === 'employee') success = await updateEmployee(editItem._id, updates);
                  if (editItem.type === 'service') success = await updateService(editItem._id, updates);
                  if (editItem.type === 'project') success = await updateProject(editItem._id, updates);
                  if (success) {
                    toast({ title: 'Updated!', description: 'Item updated successfully.' });
                    setEditItem(null);
                  } else {
                    toast({ title: 'Error', description: 'Failed to update. Please try again.', variant: 'destructive' });
                  }
                }} onCancel={() => setEditItem(null)} />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
};

// EditForm component
function EditForm({ item, onSave, onCancel }) {
  const [form, setForm] = useState(() => {
    if (item.type === 'employee') return { name: item.name, position: item.position || item.title };
    if (item.type === 'service') return { name: item.name || item.title, description: item.description };
    if (item.type === 'project') return { name: item.name || item.title, category: item.category, description: item.description, tech: Array.isArray(item.tech) ? item.tech.join(', ') : '' };
    return {};
  });
  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let updates = { ...form };
    if (item.type === 'project' && updates.tech) updates.tech = updates.tech.split(',').map(t => t.trim());
    onSave(updates);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {item.type === 'employee' && (
        <>
          <div>
            <label className="block mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block mb-1">Position</label>
            <input name="position" value={form.position} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
        </>
      )}
      {item.type === 'service' && (
        <>
          <div>
            <label className="block mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
        </>
      )}
      {item.type === 'project' && (
        <>
          <div>
            <label className="block mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block mb-1">Category</label>
            <input name="category" value={form.category} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block mb-1">Technologies (comma-separated)</label>
            <input name="tech" value={form.tech} onChange={handleChange} className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" />
          </div>
        </>
      )}
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-gray-600 text-white">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded bg-cyan-600 text-white">Save</button>
      </div>
    </form>
  );
}

export default AdminPage;
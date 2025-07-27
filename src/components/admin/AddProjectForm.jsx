import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

export const AddProjectForm = ({ setOpen, addProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !description || !tech || !url) {
      toast({
        title: 'Error',
        description: 'Please fill out all fields.',
        variant: 'destructive',
      });
      return;
    }
    const techArray = tech.split(',').map(t => t.trim());
    const success = await addProject({ name: title, category, description, tech: techArray, url });
    if (success) {
      toast({
        title: 'Success!',
        description: 'New project has been added.',
      });
      setOpen(null);
    } else {
      toast({
        title: 'Error',
        description: 'Failed to add project. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Project Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., E-Commerce Platform" className="bg-white/10 border-white/20" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Web Development" className="bg-white/10 border-white/20" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the project" className="bg-white/10 border-white/20" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="tech">Technologies (comma-separated)</Label>
        <Input id="tech" value={tech} onChange={(e) => setTech(e.target.value)} placeholder="e.g., React, Node.js, MongoDB" className="bg-white/10 border-white/20" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="url">Project URL</Label>
        <Input id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="e.g., https://myproject.com" className="bg-white/10 border-white/20" />
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">Add Project</Button>
    </form>
  );
};
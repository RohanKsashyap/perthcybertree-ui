import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

export const AddEmployeeForm = ({ setOpen, addEmployee }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !title) {
      toast({
        title: 'Error',
        description: 'Please fill out all fields.',
        variant: 'destructive',
      });
      return;
    }
    const success = await addEmployee({ name, position: title });
    if (success) {
      toast({
        title: 'Success!',
        description: 'New employee has been added.',
      });
      setOpen(null);
    } else {
      toast({
        title: 'Error',
        description: 'Failed to add employee. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Employee Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Jane Doe" className="bg-white/10 border-white/20" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Lead Developer" className="bg-white/10 border-white/20" />
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">Add Employee</Button>
    </form>
  );
};
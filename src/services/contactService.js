import { supabase } from '../lib/supabaseClient';

export const submitContactForm = async (formData) => {
    try {
        const { error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    gender: formData.gender,
                    description: formData.description,
                }
            ]); // Removed .select()

        if (error) throw error;

        return { success: true };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: error.message };
    }
};
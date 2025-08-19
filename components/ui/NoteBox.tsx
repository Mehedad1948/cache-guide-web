export default function NoteBox({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-cyan-50  p-4 text-cyan-700 rounded-xl border border-cyan-300 '>
            {children}
        </div>
    );
}
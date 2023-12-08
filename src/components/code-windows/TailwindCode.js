const TailwindCode = () => {
    return (
        <div className='flex items-center justify-center my-12'>
            <div className='max-w-sm'>
                <div className="mockup-code">
                    <pre className='text-xs text-blue-400'><code>
                    <span className='text-slate-400'>{'<'}</span>
                    {'div'}</code></pre>
                    <pre className='text-xs text-blue-300'><code>{'className='}
                    <span className='text-orange-400'>{'"fixed inset-0 bg-black opacity-50 z-40"'}
                    </span><span className='text-slate-400'>{'>'}</span>
                    <span className='text-blue-400'></span></code></pre>
                </div>
            </div>
        </div>
    );
};

export default TailwindCode;
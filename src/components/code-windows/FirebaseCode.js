const FirebaseCode = () => {
return (
    <div className='flex items-center justify-center my-12'>
        <div className='max-w-sm'>
            <div className="mockup-code">
                <pre className='text-xs text-purple-500'><code>{'{'}</code></pre>
                <pre className='text-xs text-blue-300'><code>{'    '}{'name:'}
                <span className='text-orange-400'>{' '}{'"Original 16"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'price:'}
                <span className='text-orange-400'>{' '}{'"7"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'description:'}
                <span className='text-orange-400'>{' '}{'"16oz IPA"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'category:'}
                <span className='text-orange-400'>{' '}{'"Drinks"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'subcategory:'}
                <span className='text-orange-400'>{' '}{'"Draft"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'gluten-free:'}
                <span className='text-orange-400'>{' '}{'"false"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'spicy:'}
                <span className='text-orange-400'>{' '}{'"false"'}</span></code>
                <code><span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-purple-500'><code>{'}'}</code>
                <code><span className='text-white'>{','}</span></code></pre>
            </div>
        </div>
    </div>
    );
};

export default FirebaseCode;
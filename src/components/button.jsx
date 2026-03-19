export default function Button(props){
    const {children, ...rest} = props
    return(
        <button className="w-40 m-2 mt-auto rounded-full text-white shadow-sm hover:bg-stone-600 transition cursor-pointer bg-[#2F4F3A] disabled:bg-stone-600" {...rest}>
            {children}
      </button>
    )
}
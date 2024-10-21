interface IconArrowProps {
    color: string
}

const IconArrow: React.FC<IconArrowProps> = ({ color = "#4960FF" }) => {
    return (
        <div>
            <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke={color}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 8l4 4m0 0l-4 4m4-4H7" />
            </svg>

        </div>
    );
};
export default IconArrow;

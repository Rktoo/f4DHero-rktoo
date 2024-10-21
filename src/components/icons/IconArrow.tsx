interface IconArrowProps {
    color: string
}

const IconArrow: React.FC<IconArrowProps> = ({ color = "#4960FF" }) => {
    return (
        <div>
            <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke={color}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8l4 4m0 0l-4 4m4-4H8" />
            </svg>

        </div>
    );
};
export default IconArrow;

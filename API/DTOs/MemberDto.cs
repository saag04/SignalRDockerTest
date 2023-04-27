﻿namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }        
        public DateTime? DateOfBirth { get; set; }
        public string? KnownAs { get; set; }
        public DateTime? Created { get; set; } = DateTime.UtcNow;
        public DateTime? LastActive { get; set; } = DateTime.UtcNow;
        public string? Gender { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public int Age { get; set; }
    }
}
